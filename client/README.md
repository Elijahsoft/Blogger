# Todo

- Consider using fonteaweme icons from npm package rather than find guidance [here](https://fontawesome.com/v5/docs/web/use-with/react)
- Remove theses source code since you don't use them 
`
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
   <script src="js/scripts.js"></script> 

- Use react  router link  tag for navigations ` import { Link } from "react-router-dom"; ` and ` <Link to="/blogger/about">`
 
 
## code to change

 ``` 
 <a class="nav-link px-lg-3 py-3 py-lg-4" href="/blogger/about">
            About
        </a> 
``` 

# Expected result 

``` 
   <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/blogger/about">
            About
  </Link> 
        
 ```
 
 Cut `Blogger/client/src/components/blogs` past to `Blogger/client/src/pages/blogs`
`
 - The way you wrote source code in this ../blogs/Create.jsx is really great 🤗 
 - `id="Title"` on the form does nothing there you can or cannot remove them from your source code
 
