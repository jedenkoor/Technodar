export default {
  middleware: [
    function ({ redirect, app }) {
      redirect(`/${app.context.i18n.locale}/development/vmts`)
    }
  ]
}
