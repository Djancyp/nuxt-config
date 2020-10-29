export default (context, inject) => {
    const options = JSON.parse(`<%= JSON.stringify(options) %>`)
    inject('config', options)
  }