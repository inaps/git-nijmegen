import React, {useState} from "react";
import styles from "./ResultField.module.scss"
import {Input} from "../Input";

type Props = {
	text: string;
	placeholder: string;
}

export const ResultField: React.FC<Props> = ({text, placeholder}) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleClick = () => {
		try {
			navigator.clipboard.writeText(text)
			setIsCopied(true);

			setTimeout(() => {
				setIsCopied(false)
			}, 3000)
		} catch (e) {}
	}

	return <div className={styles.resultField}>
		<div onClick={handleClick} className={styles.textWrapper}>
			<Input value={text} placeholder={placeholder} className={styles.text}/>
		</div>
		{isCopied && <div className={styles.copied}>Скопировано!</div>}
	</div>
}
