const fs = require('fs');
const zlib = require('zlib');

function crc32buf(buf) {
  const table = crc32buf.table || (crc32buf.table = (function() {
    let c; const t = [];
    for (let n = 0; n < 256; n++) {
      c = n;
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
      t[n] = c;
    }
    return t;
  })());
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  return (crc ^ 0xffffffff) >>> 0;
}

function pngBuffer(width, height, rgba) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const t = Buffer.from(type, 'ascii');
    const crc = Buffer.alloc(4);
    const crcval = crc32buf(Buffer.concat([t, data]));
    crc.writeUInt32BE(crcval, 0);
    return Buffer.concat([len, t, data, crc]);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8);
  ihdr.writeUInt8(6, 9);
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);

  const rowBytes = width * 4;
  const raw = Buffer.alloc((rowBytes + 1) * height);
  for (let y = 0; y < height; y++) {
    const rowStart = y * (rowBytes + 1);
    raw[rowStart] = 0;
    for (let x = 0; x < width; x++) {
      const px = rowStart + 1 + x * 4;
      raw[px] = rgba[0];
      raw[px+1] = rgba[1];
      raw[px+2] = rgba[2];
      raw[px+3] = rgba[3];
    }
  }

  const compressed = zlib.deflateSync(raw);

  return Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

const outDir = './public/assets/images';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const images = [
  { name: 'cardekho.png', color: [14, 165, 233, 255] },
  { name: 'crime.png', color: [249, 115, 22, 255] },
  { name: 'fitness.png', color: [20, 184, 166, 255] },
  { name: 'ai-chatbot.png', color: [139, 92, 246, 255] },
  { name: 'traffic.png', color: [249, 115, 22, 255] },
];

for (const img of images) {
  const buf = pngBuffer(800, 500, img.color);
  fs.writeFileSync(`${outDir}/${img.name}`, buf);
}

console.log('Generated PNG placeholders in', outDir);
