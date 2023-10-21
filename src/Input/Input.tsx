import React from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

type Props = {
	placeholder: string;
	value?: string;
	className?: string;
	defaultValue?: string;
	onChange?: (text: string) => void;
}

export const Input: React.FC<Props> = ({
  value,
	onChange,
  className,
  placeholder,
	defaultValue,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value);
	}

	return <input
		value={value}
		onChange={handleChange}
		className={classNames(styles.input, className)}
		placeholder={placeholder}
		defaultValue={defaultValue}
	/>
}
