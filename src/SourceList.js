import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
export default class List extends React.Component {
	// key=2c27260665d5434cb5c68ead5b2e3cb9
	state = {
		loading: true,
		data: [],
	};

	async componentDidMount() {
		const url =
			'https://newsapi.org/v2/sources?apiKey=2c27260665d5434cb5c68ead5b2e3cb9';
		const response = await fetch(url);
		const channels = await response.json();
		this.setState(
			{
				data: channels.sources,
			},
			() => {}
		);
	}
	render() {
		const channelList = this.state.data.map((channel) => {
			return (
				<tbody>
					<tr>
						<th key={channel.id}>{channel.id}</th>
						<th>{channel.name}</th>
					</tr>
				</tbody>
			);
		});
		return <table>{channelList}</table>;
	}
}
