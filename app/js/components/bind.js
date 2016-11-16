export default (selector, value) => {
  if (typeof selector != 'string') return;
  $(selector).html(value)
}
