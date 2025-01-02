# XML Schema Validation with JavaScript
This project demonstrates how to validate XML documents against an XSD schema using JavaScript and the `libxmljs` library. While JSON is lightweight, XML offers powerful features like schema validation for ensuring data integrity.


## Why XML and Schema Validation?
While JSON is easy to parse, lightweight, and super popular on the web thanks to its simplicity and seamless integration with JavaScript, it lacks built-in schema validation mechanisms. This can lead to inconsistencies and errors when dealing with complex data structures, especially when data is exchanged between different systems or applications.

JSON's widespread adoption is partly due to its human-readable format, compact size, and language-independent nature, making it a convenient choice for data interchange online. However, when it comes to ensuring data integrity and enforcing strict data structures, XML offers a more robust solution through schema validation.

With XML, you can define and validate the structure and rules of documents using schemas like XSD (XML Schema Definition), ensuring that data conforms to predefined rules. This level of validation is crucial in applications where data quality and accuracy are critical, such as financial systems, healthcare, or data exchange between organizations.


## Getting Started
1. Clone the repository or download the project files.
2. Install the required dependencies: `npm install`
3. Run the validation script: `node xml-validator.js`


This will validate all XML files in the `xml-files/` directory against the provided XSD schema (`book_catalog.xsd`) and display the validation results in the console. Alternatively, you can use the `npm start` command, which is configured in the `package.json` file: `npm start`


## Project Structure
- `book_catalog.xsd`: The XSD schema file.
- `xml-files/`: Directory containing XML files for validation.
- `xml-validator.js`: The JavaScript file that performs XML validation.
