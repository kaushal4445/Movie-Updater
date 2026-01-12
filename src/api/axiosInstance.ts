import axios from "axios";

 export const baseApi = axios.create({
    baseURL: "https://api.themoviedb.org",
     headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjQ3MzY0NGM5Mjk0YzNhNzE4NmM3NzhjODM0NDBjNyIsIm5iZiI6MTc1MzE3MzI1Mi4zNDIwMDAyLCJzdWIiOiI2ODdmNGQwNGZmMjZiZWIxNjM3MmQxMDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.weJm9g18XcY8bAS5YK-OHFpivfoXFB12S-bmyM_tZB0",
          }
})