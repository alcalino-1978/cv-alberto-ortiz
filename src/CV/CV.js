// export const CV = {
//     personalInfo: {
//       name: "",
//       mail: "",
//       charge: "",
//       phone: "",
//       image: '',
//       linkedin: "",
//     },
//     education: [
//       {
//         nameEstudies: "",
//         place: "",
//         start: '',
//         end: '',
//       }
//     ],
//     experience: [
//       {
//         nameJob: "",
//         companyName: "",
//         date: '',
//         description: ''
//       }
//     ],
//     languages: [
//       {
//         nameEstudies: "Inglés",
//         knowledge: "B2",
//         start: 2015,
//         end: new Date().getFullYear(),
//       },
//       {
//         nameEstudies: "Español",
//         certification: "Vivir en España",
//         knowledge: "Nativo",
//         start: 1978,
//         end: new Date().getFullYear(),
//       },
//       {
//         nameEstudies: "Alemán",
//         certification: "Sin certificación",
//         knowledge: "A1",
//         start: 2018,
//         end: new Date().getFullYear(),
//       },
//     ],
//     skills: {
//       "Lenguajes": ["HTML", "JavaScript", "jQuery", "Node.js"],
//       "Css": ["SaSS", "Arquitectura ITCSS", "Atomic Design", "Principles of CSS Arquitecture"],
//       "Frameworks Js": ["Angular"],
//       "Ci/Cd": ["Git"],
//       "Diseño": ["Photoshop", "Illustrator"],
//       "Otros": ["Accesibilidad", "SEO", "UX"],
//     }
//   };
import axios from "axios";




export async function CV() {
    try {
      const response = await axios.get('https://127.0.0.1:8000/api/v1/cv/2');
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export async function updateEmail(email) {
  try {
    const response = await axios.post('https://127.0.0.1:8000/api/v1/cv/2/email',{
      email
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}