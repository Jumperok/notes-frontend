import axios from 'axios';
import apiData from '../../data';

export default {

  // getNotesFromAPI() {
  //   return axios.get(`${apiPrefix}/api`);
  // },

  getNotesFromAPI() {
    return Promise.resolve({
      data: {
        Notes: apiData // [{}, {}]
      }
    });
  },

  // [{"_id":"1", "executor": "Lol", "text": "laaal", "status": "TODO"}]

  addNotesAPI(Note) {
    //return axios.post(`${apiPrefix}/api`, Note);
    //console.log()
    return Promise.resolve({
      data: {
        Note: {...Note, "_id": +(new Date())} // 
      }
    });
  },

  changeTaskStatusAPI(id, newNote) {
    // return axios.put(`${apiPrefix}/api/${id}`, newNote);
    return Promise.resolve({
      data: {
        Note: {...newNote, "_id": id} // 
      }
    });
  },

  deleteTaskAPI(id) {
    //return axios.delete(`${apiPrefix}/api/${id}`);
    return Promise.resolve({
      data: {
        id // 
      }
    });
  }

}
