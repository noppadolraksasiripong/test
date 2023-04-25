type Props = {
  generatePDF: () => void
}
const ButtonPrint = ({ generatePDF }: Props) => {
  return (
    <div><button onClick={() => generatePDF()}>Print this out!</button></div>
  )
}
export default ButtonPrint
