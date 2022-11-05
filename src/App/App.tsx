import React, {useState} from 'react';
import styles from './App.module.scss';
import {
	LOCALSTORAGE_KEY_NUMBER,
	LOCALSTORAGE_KEY_PREFIX,
	LOCALSTORAGE_KEY_PROJECT,
	LOCALSTORAGE_KEY_TITLE,
} from "../constants";
import { Input } from "../Input";

export const App = () => {
	const [title, setTitle] = useState(localStorage.getItem(LOCALSTORAGE_KEY_TITLE) ?? "");
	const [project, setProject] = useState(localStorage.getItem(LOCALSTORAGE_KEY_PROJECT) ?? "");
	const [prefix, setPrefix] = useState(localStorage.getItem(LOCALSTORAGE_KEY_PREFIX) ?? "");
	const [number, setNumber] = useState(localStorage.getItem(LOCALSTORAGE_KEY_NUMBER) ?? "");

	const handleTitleChange = (value: string) => {
		localStorage.setItem(LOCALSTORAGE_KEY_TITLE, value)
		setTitle(value)
	}

	const handleProjectChange = (value: string) => {
		localStorage.setItem(LOCALSTORAGE_KEY_PROJECT, value)
		setProject(value)
	}

	const handlePrefixChange = (value: string) => {
		localStorage.setItem(LOCALSTORAGE_KEY_PREFIX, value)
		setPrefix(value)
	}

	const handleNumberChange = (value: string) => {
		localStorage.setItem(LOCALSTORAGE_KEY_NUMBER, value)
		setNumber(value)
	}

	const branchName = `${prefix}-${project.toLowerCase()}-${number}-${title.toLowerCase().trim().split(" ").join("-")}`
	const commitMessage = `[${project.toUpperCase()}-${number}] ${title.trim()}`

	return (
		<div className={styles.app}>
			<div className={styles.form}>
				<Input
					defaultValue={title} onChange={handleTitleChange} label="Title" placeholder="Implement something"/>
				<div className={styles.shortFields}>
					<Input defaultValue={project} onChange={handleProjectChange} label="Project" placeholder="TRL"/>
					<Input defaultValue={number} onChange={handleNumberChange} label="Number" placeholder="1234"/>
					<Input defaultValue={prefix} onChange={handlePrefixChange} label="Prefix" placeholder="d/subtask"/>
				</div>
				<div className={styles.result}>
					<Input value={branchName} label="Branch" placeholder="Branch name"/>
					<Input value={commitMessage} label="Commit" placeholder="Commit message"/>
				</div>
			</div>
		</div>
	);
}
