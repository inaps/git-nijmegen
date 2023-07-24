import React from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

type Props = {
	placeholder: string;
	value?: string;
	isCopyOnClick?: boolean;
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
	isCopyOnClick,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value);
	}

	const handleClick = () => {
		console.log(value)
		if (value && isCopyOnClick) {
			navigator.clipboard.writeText(value)
		}
	}

	return <input
		value={value}
		onChange={handleChange}
		onClick={handleClick}
		className={classNames(styles.input, className, {[styles.copy]: isCopyOnClick})}
		placeholder={placeholder}
		defaultValue={defaultValue}
	/>
}
