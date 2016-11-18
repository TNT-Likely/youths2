export default (field) => {
  return $(`[name=${field}]`).val()
}
