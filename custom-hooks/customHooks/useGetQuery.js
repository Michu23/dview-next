"use client"
import React from 'react';
import axios from '../../API/api';

export default function useGetQuery() {
	const [data, setData] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState('');

	const fetchData = async (query) => {
		try {
			setLoading(true); // set loading to true to indicate that the data is being fetched

			const response = await new Promise((resolve) =>
				setTimeout(() => resolve(axios.get(query)))
			);
			
			setData(response.data); // shape the data to our model

			setError('');
		} catch (err) {
			setData(null);
			setError(err.message);
		} finally {
			setLoading(false); // set loading to false to indicate that the api call has ended
		}
	};

	return [data, loading, error, fetchData];
}
