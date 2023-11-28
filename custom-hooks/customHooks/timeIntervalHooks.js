"use client"

import React from 'react';
/**
 *
 * @param {INTEGER} refreshCycle :- Number of times you want setInterval to work
 * @param {Function} callback :- function you want to execute at each interval
 *
 * USAGE :- useTimeout(100, ()=>console.log("I am setTimeout interval"));
 *
 * This hook is important to be used because using this we can :-
 * 1.)abstraction the whole usage of setIterval() method and
 * 2.)Avoid any kind of memory leakage that can result because of wrong handling
 *    of the setInterval code.
 * 3.)setInterval gets removed and dellocates the memory whenever the component in which it's being
 * used gets unmounted
 */
export const useTimeInterval = (callback, refreshCycle = 100) => {
	React.useEffect(() => {
		// let intervalId;
		if (refreshCycle <= 0) {
			setTimeout(callback, 0);
			return 0;
		}

		const intervalId = setInterval(() => callback(), refreshCycle);

		return () => clearInterval(intervalId);
	}, [refreshCycle, setInterval, clearInterval]);
};

export const useTimeOut = () => console.log('work in progress!');
