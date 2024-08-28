interface AgentMessagePropsI extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    message: string,
}

export const AgentMessage = (props: AgentMessagePropsI) => {
    const { message, className, ...restProps } = props;
    return <>
        <div className={`anchors quick-replies-text px-3 py-4 rounded-2xl my-3 mx-4 w-fit  ${className}`} style={{ wordWrap: 'break-word', lineHeight: "20px", whiteSpace: "pre-wrap", borderBottomRightRadius: "3px", background: "#2a2185", color: "rgb(255, 255, 255)" }}>
            <span>{message}</span>
        </div>
    </>
}