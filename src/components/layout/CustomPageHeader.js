import React from 'react'
import { Breadcrumb } from 'antd';

export default function CustomPageHeader({routes, title}) {
	return (
		<div style={{ padding: '16px 24px', backgroundColor: '#ffffff' }}>
			<Breadcrumb style={{ marginBottom: '12px' }}>
				{ routes ? routes.map((route, index) => {
					return (
						<Breadcrumb.Item key={index}><a href={`${route.path}`}>{route.breadcrumbName}</a></Breadcrumb.Item>
					)
				}) : null }
			</Breadcrumb>
			<h3>{title}</h3>
		</div>
	)
}
