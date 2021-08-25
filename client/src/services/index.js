// define the api url
export const baseWodURL = `https://api.airtable.com/v0/${process.env.REACT_APP_WODS_APP}`
export const baseEquipmentURL = `https://api.airtable.com/v0/${process.env.REACT_APP_EQUIPMENT_APP}`

// define a config object that has our authorization api key
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_WODS_KEY}`
  }
}