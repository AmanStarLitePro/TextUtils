import React, { memo } from 'react'

export default memo(function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div>
            {props.alert?.msg && (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)} </strong>{props.alert.msg}
            </div>
            )}
        </div>
    )
})
