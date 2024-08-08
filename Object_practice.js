let headers;
let data_attributes = [];
let result = {};
let final_data = {};
const csv_data = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`
let new_data = csv_data.split(/[,\n]/);
headers = new_data.splice(0, 4);
function split_me (new_data, chunkSize) {
    const results = [];
    let index = 0;
    while (index < new_data.length) {
        results.push(new_data.slice(index, index + chunkSize));
        index += chunkSize;
    }
return results;
}
let values = split_me(new_data, 4);
for (let i = 0; i < headers.length; i++) {
    final_data[headers[i]] = values[i];
}
console.log(final_data);