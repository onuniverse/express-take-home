module.exports = {
  artists: {
    search: require("./artists/search-artists"),
  },
  status: require("./status"),
  users: {
    create: require("./users/create-user"),
    deleteById: require("./users/delete-user-by-id"),
    getById: require("./users/get-user-by-id"),
    list: require("./users/list-users"),
    updateById: require("./users/update-user-by-id"),
  },
}
