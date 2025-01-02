const fs = require('fs');
const path = require('path');
const libxmljs = require('libxmljs');

// Read the XSD schema file
const schemaData = fs.readFileSync('xml-schema/book_catalog.xsd', 'utf8');
const schemaDoc = libxmljs.parseXml(schemaData);

// Read all XML files in the xml-files folder
const xmlFilesDir = path.join(__dirname, 'xml-files');
const xmlFiles = fs.readdirSync(xmlFilesDir);

xmlFiles.forEach(file => {
  const xmlFilePath = path.join(xmlFilesDir, file);
  const xmlData = fs.readFileSync(xmlFilePath, 'utf8');

  // Create an XML document, ignoring any parsing errors
  let xmlDoc;
  try {
    xmlDoc = libxmljs.parseXml(xmlData, { dtdattr: true, recover: true });
  } catch (err) {
    console.log(`Error parsing ${file}: ${err.message}`);
    return;
  }

  // Validate the XML document against the schema
  const validationResult = xmlDoc.validate(schemaDoc);

  console.log(`Validating ${file}:`);
  if (validationResult) {
    console.log('  XML document is valid');
  } else {
    console.log('  XML document is invalid:');
    const validationErrors = xmlDoc.validationErrors;
    validationErrors.forEach(error => {
      console.log(`  - ${error.message}`);
    });
  }
  console.log();
});