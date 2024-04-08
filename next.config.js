module.exports = {
  exportPathMap() {
    return {
      '/main': { page: '/main' },
      '/auth': { page: '/register' },
      '/login': { page: '/login' },
    };
  },
};
