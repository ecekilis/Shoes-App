type Props = {
    info: string,
}
const Error = ({ info }: Props) => {
    return (
        <div>
            <p>Uzgunuz bir sorun olustu</p>
            <p>{info}</p>
        </div>
    )
}

export default Error
