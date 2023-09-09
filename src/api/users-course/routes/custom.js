module.exports = {
  routes: [
    {
      method: "GET",
      path: "/users-course/:user_id",
      handler: "users-course.findOne",
      config: {
        auth: false
      }
    }
  ]
}
