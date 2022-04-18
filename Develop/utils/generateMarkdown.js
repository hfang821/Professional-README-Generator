// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
 } else if (license === 'Apache 2.0') {
   return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
 } else if (license === 'Boost'){
   return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
 } else if (license ==='BSD') {
  return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
 } else if (license === "Eclipse"){
  return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
 } else if (license === "Mozilla Public License 2.0") {
  return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
 } else {
   return '';
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return `https://opensource.org/licenses/MIT`;
 } else if (license === 'Apache 2.0') {
   return `https://opensource.org/licenses/Apache-2.0`;
 } else if (license === 'Boost'){
   return `https://www.boost.org/LICENSE_1_0.txt`;
 } else if (license ==='BSD') {
  return `https://opensource.org/licenses/BSD-3-Clause`;
 } else if (license === "Eclipse"){
  return `https://opensource.org/licenses/EPL-1.0`;
 } else if (license === "Mozilla Public License 2.0") {
  return `https://opensource.org/licenses/MPL-2.0`;
 } else {
   return '';
 }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license==='') {
    return 'The project is not licensed';
  }

 return `The Project is licensed under the ${license} license`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenseOptions)}

  ## Table of Contents
  * [Project Description](#description)
  * [Installation Instructions](#instructions)
  * [Usage Information](#usage)
  * [Contribution Guidelines](#guidelines)
  * [Test Instructions](#test)
  * [Liscense](#liscense)
  * [Username](#username)
  * [Contact Instructions](#contact)

  ## Project Description <a name="description"></a>
  ${data.description}

  ## Installation Instructions <a name="instructions"></a>
  ${data.installation}

  ## Usage Information <a name="usage"></a>
  ${data.usage}

  ## Contribution Guidelines <a name="guidelines"></a>
  ${data.guidelines}

  ## Test Instructions <a name="test"></a>
  ${data.test}

  ## Liscense <a name="liscense"></a>
  ${renderLicenseSection(data.licenseOptions)}


  ${renderLicenseLink(data.licenseOptions)}

  ## Username <a name="username"></a>
  ${data.username}

  ## Contact Instructions <a name="contact"></a>
  ${data.contact}

`;
}

module.exports = generateMarkdown;


