import React from 'react';
import axios from '../../API/api';

export default function usePostQuery() {
	const [data, setData] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState('');

	const fetchData = async (query, payload) => {
		try {
			setLoading(true); // set loading to true to indicate that the data is being fetched
			setError('');

			const response = await axios.post(query, payload);

			setData(response.data); // shape the data to our model
			setError('');
		} catch (err) {
			const errorMsg = err?.response?.data?.exception_message;
			setData(null);
			setError(errorMsg || 'something went wrong');
		} finally {
			setLoading(false); // set loading to false to indicate that the api call has ended
		}
	};

	return [data, loading, error, fetchData];
}
