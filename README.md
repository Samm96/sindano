# Sindano Health Externship
A landing page for the Sinadano company built using React and Storybook. This project was a voluntary collaboration between four other developers and myself under the Practicum USA externship program.

# Instructions
[Notion](https://www.notion.so/Sindano-394de17457e94490b41ab4a1ff099e06)

<hr>

## 🤖 Technologies & Methods Used

* [React](https://reactjs.org/docs/getting-started.html#versioned-documentation)
* [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
* [CSS Theming](https://dev.to/aromanarguello/how-to-use-themes-in-styled-components-49h)
* [Styled Components](https://styled-components.com/docs/basics#getting-started)
* [Global Styling](https://dilshankelsen.com/create-global-styles-with-styled-components/)
* [Chart.js](https://www.chartjs.org/docs/latest/)
* [Framer Motion](https://www.framer.com/docs/introduction/)
* [Nodemailer](https://www.youtube.com/watch?v=30VeUWxZjS8&t=518s)
* [Serverless](https://www.serverless.com/plugins/serverless-dotenv-plugin)
* [LinkedIn Autofill](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-user/Help/Apps/LinkedInAutoFill/Tasks/AddAutoFillWithLinkedInButtonLandingPage.htm)

<hr>

## 📁 Organization

The **frontend** of the app is divided into six folders:

* **_Components_** : Stores code that is divided into reusable components and then pieced together in `App.js`.
* **_images_** : Image, SVG and PNG files used in the app, which is further divided into “social” for the social media icons and “team” for Sindano’s team’s pictures.
* **_pdf_** : Any PDF files used in the app such as Sindano’s ‘terms-of-use’ and online privacy policy.
* **_stories_** : Stores the files in which are needed to simulate different components of the app in Storybook.
* **_utils_** : Miscellaneous code that handles chart configurations, the app’s global styles, statistics, and animation variants for Framer Motion.
* **_vendor_** : Files for the fonts used in the app or any third-party sources.

For the sake of organization and keeping everything that was related together as well as the use frequency of the method in the tech industry, we decided to make use of [Styled Components](https://styled-components.com/) when applying CSS to the app. This reduces the amount of files in the app.
`index.js` handles the routing between the app and the LinkedIn element.

The backend code has its own folder, handling the Serverless code.


<hr>

## ⏳ Issues and Limitations

### Chart 📊
[Chart.js](https://www.chartjs.org/), the third party program used to generate the app’s `BarChart` component, doesn’t get along with CSS media queries even though the chart is set to be responsive in its configuration. 
* This is also seen in Chart.js’s documentation under `Bar Chart` when looking at and resizing their [demo](https://www.chartjs.org/docs/latest/charts/bar.html#horizontal-bar-chart).
* The best solution was to surround the chart canvas in a `div` and set the height and/or width on said `div` instead of the canvas.
* In order to see the change in the chart when going from screen size `1024px` to `375px`, the page needs to be refreshed at `375px`.
* The same goes when resizing the screen from `375px` to `1024px`. The page needs to be refreshed in order to see the changes.
* Even with this issue, the chart is set to change only when the screen is shrunk to `580px`. It should show up fine on screen sizes larger than `580px`.


### LinkedIn Feature 👤
* When opening the modal to request a demo, referencing the option to fill in information from LinkedIn instead of manually, seems to only work properly if the user is on the Chrome browser. It doesn’t function on the Safari browser— instead of filling out information in the appropriate field, Safari opens the landing page. Other browsers have not been tested.

* Notice the comment in `index.js` marked “NEVER DO THIS”. The code between those comments are NOT to be deleted. It is just marked as bad practice to code it that way, but there was no other way to make the LinkedIn feature to function.
