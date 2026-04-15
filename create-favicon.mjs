import sharp from 'sharp';
import { writeFileSync } from 'fs';

// Create ICO file from the 32x32 PNG
const png32 = await sharp('./public/favicon-32x32.png').resize(32, 32).png().toBuffer();
const png16 = await sharp('./public/favicon-16x16.png').resize(16, 16).png().toBuffer();

// ICO format: header + directory entries + image data
function createICO(images) {
  // Each image: { width, height, buffer }
  const headerSize = 6;
  const dirEntrySize = 16;
  const numImages = images.length;
  
  let offset = headerSize + dirEntrySize * numImages;
  const dirEntries = [];
  const imageBuffers = [];

  for (const img of images) {
    // Convert PNG to BMP-style data for ICO
    dirEntries.push({
      width: img.width === 256 ? 0 : img.width,
      height: img.height === 256 ? 0 : img.height,
      dataSize: img.buffer.length,
      offset: offset,
    });
    imageBuffers.push(img.buffer);
    offset += img.buffer.length;
  }

  // ICO Header (6 bytes)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);       // Reserved
  header.writeUInt16LE(1, 2);       // Type: 1 = ICO
  header.writeUInt16LE(numImages, 4); // Number of images

  // Directory entries
  const dirs = Buffer.alloc(dirEntrySize * numImages);
  dirEntries.forEach((entry, i) => {
    const off = i * dirEntrySize;
    dirs.writeUInt8(entry.width, off);
    dirs.writeUInt8(entry.height, off + 1);
    dirs.writeUInt8(0, off + 2);    // Color palette
    dirs.writeUInt8(0, off + 3);    // Reserved
    dirs.writeUInt16LE(1, off + 4); // Color planes
    dirs.writeUInt16LE(32, off + 6); // Bits per pixel
    dirs.writeUInt32LE(entry.dataSize, off + 8);
    dirs.writeUInt32LE(entry.offset, off + 12);
  });

  return Buffer.concat([header, dirs, ...imageBuffers]);
}

const ico = createICO([
  { width: 16, height: 16, buffer: png16 },
  { width: 32, height: 32, buffer: png32 },
]);

writeFileSync('./public/favicon.ico', ico);
console.log('favicon.ico created successfully in public/');
