import React, {useState} from 'react';
import styles from './App.module.scss';
import {
	LOCALSTORAGE_KEY_NUMBER,
	LOCALSTORAGE_KEY_TYPE,
	LOCALSTORAGE_KEY_PROJECT,
	LOCALSTORAGE_KEY_TITLE, LOCALSTORAGE_KEY_BRANCH_PREFIX,
} from "../constants";
import {Input} from "../Input";
import {ResultField} from "../ResultField/ResultField";

export const App = () => {
	const [project, setProject] = useState(localStorage.getItem(LOCALSTORAGE_KEY_PROJECT) ?? "PJT");
	const [branchPrefix, setBranchPrefix] = useState(localStorage.getItem(LOCALSTORAGE_KEY_BRANCH_PREFIX) ?? "d/");
	const [title, setTitle] = useState(localStorage.getItem(LOCALSTORAGE_KEY_TITLE) ?? "Task title");
	const [type, setType] = useState(localStorage.getItem(LOCALSTORAGE_KEY_TYPE) ?? "task");
	const [number, setNumber] = useState(localStorage.getItem(LOCALSTORAGE_KEY_NUMBER) ?? "000");

	const handleTitleChange = (value: string) => {
		localStorage.setItem(LOCALSTORAGE_KEY_TITLE, value)
		setTitle(value)
	}

	const handleProjectChange = (value: string) => {
		localStorage.setItem(LOCALSTORAGE_KEY_PROJECT, value)
		setProject(value)
	}

	const handlePrefixChange = (value: string) => {
		localStorage.setItem(LOCALSTORAGE_KEY_TYPE, value)
		setType(value)
	}
	const handleBranchPrefixChange = (value: string) => {
		localStorage.setItem(LOCALSTORAGE_KEY_BRANCH_PREFIX, value)
		setBranchPrefix(value)
	}

	const handleNumberChange = (value: string) => {
		localStorage.setItem(LOCALSTORAGE_KEY_NUMBER, value)
		setNumber(value)
	}

	const branchName = `${branchPrefix}${type}-${project.toLowerCase()}-${number}-${title.toLowerCase().trim().split(" ").join("-")}`
	const commitMessage = `[${project.toUpperCase()}-${number}] ${title.trim()}`

	return (
		<div className={styles.app}>
			<div className={styles.form}>
				<div className={styles.fields}>
					<Input defaultValue={project} className={styles.project} onChange={handleProjectChange} placeholder="PRJCT"/>
					<Input defaultValue={branchPrefix} className={styles.project} onChange={handleBranchPrefixChange} placeholder="Branch prefix"/>
				</div>
				<div className={styles.fields}>
					<Input defaultValue={type} className={styles.project} onChange={handlePrefixChange} placeholder="type"/>
					<Input defaultValue={number} className={styles.project} onChange={handleNumberChange} placeholder="number"/>
					<Input defaultValue={title} className={styles.title} onChange={handleTitleChange} placeholder="Title"/>
				</div>
				<div className={styles.result}>
					<ResultField text={branchName}  placeholder="Branch name"/>
					<ResultField text={commitMessage} placeholder="Commit message"/>
				</div>
			</div>
		</div>
	);
}
