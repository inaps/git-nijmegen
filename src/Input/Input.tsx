import React from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

type Props = {
	label: string;
	placeholder: string;
	value?: string;
	className?: string;
	defaultValue?: string;
	onChange?: (text: string) => void;
}

export const Input: React.FC<Props> = ({
  label,
  value,
	onChange,
  className,
  placeholder,
	defaultValue,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value);
	}

	return <div className={classNames(styles.inputContainer, className)}>
		<div className={styles.label}>{label}</div>
		<input
			value={value}
			onChange={handleChange}
			className={styles.input}
			placeholder={placeholder}
			defaultValue={defaultValue}
		/>
	</div>
}
