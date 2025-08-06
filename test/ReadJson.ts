import * as fs from 'fs';
import * as path from 'path';

interface Person {
  name: string;
  role: string;
  company: string;
}

const filePath = path.join(__dirname, '/data/users.json');
console.log(`Reading JSON file from: ${filePath}`);

try {
  const jsonData = fs.readFileSync(filePath, 'utf-8'); //string
  const userObj: Person[] = JSON.parse(jsonData);

  // Use the object
  console.log("Name:", userObj[0].name);
  console.log("Role:", userObj[0].role);
  console.log("Company:", userObj[0].company);
} catch (error) {
  console.error("Error reading or parsing JSON:", error);
}
