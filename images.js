const fs = require('fs');
const data = Array.from(Array(38), (_, i) => {
  const id = i + 1
  return {
    id,
    image: String(id).padStart(3, '0') + '.jpeg',
    price: 10
  }
})

fs.writeFileSync('items.json', JSON.stringify(data))