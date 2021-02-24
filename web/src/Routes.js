// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        <Route path="/admin/menus/new" page={NewMenuPage} name="newMenu" />
        <Route path="/admin/menus/{id:Int}/edit" page={EditMenuPage} name="editMenu" />
        <Route path="/admin/menus/{id:Int}" page={MenuPage} name="menu" />
        <Route path="/admin/menus" page={MenusPage} name="menus" />
      </Private>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
