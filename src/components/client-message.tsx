interface ClientMessagePropsI extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    message: string
}

export const ClientMessage = (props: ClientMessagePropsI) => {
    const { message, className, ...restProps } = props;
    return <div className={`anchors quick-replies-text px-3 py-4 rounded-2xl my-3 mx-4 w-fit ${className}`} style={{ wordWrap: 'break-word', lineHeight: "20px", whiteSpace: "pre-wrap", borderTopLeftRadius: "3px", background: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)" }} {...restProps}>
        {message}
    </div>
}