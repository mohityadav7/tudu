import React from "react";
import NoticeIcon from "ant-design-pro/lib/NoticeIcon";
import { Tag } from "antd";
import "./NotificationMenu.css";

const data = [
	{
		id: "000000001",
		avatar:
			"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
		title: "Lorem ipsum",
		datetime: "2017-08-09",
		type: "all"
	},
	{
		id: "000000002",
		avatar:
			"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
		title: "Lorem ipsum Lorem ipsum",
		datetime: "2017-08-08",
		type: "all"
	},
	{
		id: "000000003",
		avatar:
			"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
		title: "Lorem ipsum Lorem ipsum",
		datetime: "2017-08-07",
		read: true,
		type: "all"
	},
	{
		id: "000000004",
		avatar:
			"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
		title: "Lorem ipsum",
		datetime: "2017-08-07",
		type: "all"
	},
	{
		id: "000000005",
		avatar:
			"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
		title: "Lorem ipsum",
		datetime: "2017-08-07",
		type: "all"
	},
	{
		id: "000000006",
		avatar:
			"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
		title: "Lorem ipsum",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		datetime: "2017-08-07",
		type: "announcement",
		clickClose: true
	},
	{
		id: "000000007",
		avatar:
			"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
		title: "Lorem ipsum",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		datetime: "2017-08-07",
		type: "assignment",
		clickClose: true
	},
	{
		id: "000000008",
		avatar:
			"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
		title: "Lorem ipsum",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		datetime: "2017-08-07",
		type: "message",
		clickClose: true
	},
	{
		id: "000000009",
		title: "Lorem ipsum",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		extra: "todo",
		status: "todo",
		type: "event"
	},
	{
		id: "000000010",
		title: "Lorem ipsum title",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		extra: "todo",
		type: "assignment"
	},
	{
		id: "000000011",
		title: "Lorem Ipsum title",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		extra: "todo",
		status: "doing",
		type: "event"
	},
	{
		id: "000000012",
		title: "",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		extra: "something",
		status: "processing",
		type: "assignment"
	}
];

function onItemClick(item, tabProps) {
	console.log(item, tabProps);
}

function onClear(tabTitle) {
	console.log(tabTitle);
}

function getNoticeData(notices) {
	if (notices.length === 0) {
		return {};
	}
	const newNotices = notices.map(notice => {
		const newNotice = { ...notice };
		// transform id to item key
		if (newNotice.id) {
			newNotice.key = newNotice.id;
		}
		if (newNotice.extra && newNotice.status) {
			const color = {
				todo: "",
				processing: "blue",
				urgent: "red",
				doing: "gold"
			}[newNotice.status];
			newNotice.extra = (
				<Tag color={color} style={{ marginRight: 0 }}>
					{newNotice.extra}
				</Tag>
			);
		}
		return newNotice;
	});
	return newNotices.reduce((pre, data) => {
		if (!pre[data.type]) {
			pre[data.type] = [];
		}
		pre[data.type].push(data);
		return pre;
	}, {});
}

const noticeData = getNoticeData(data);
const NotificationMenu = () => (
	<div
		style={{
			display: "inline",
			padding: "22px 32px 22px 16px",
			marginTop: "0px",
			height: "64px !important"
		}}>
		<NoticeIcon
			className="notice-icon"
			count={0}
			onItemClick={onItemClick}
			onClear={onClear}>
			<NoticeIcon.Tab
				list={noticeData.notification}
				title="Notifications"
				emptyText="No notifications currently."
				emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
			/>
			{/* <NoticeIcon.Tab
				list={noticeData.message}
				title="Announcements"
				emptyText="No notifications currently."
				emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
			/>
			<NoticeIcon.Tab
				list={noticeData.event}
				title="Assignments"
				emptyText="No notifications currently."
				emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
			/> */}
		</NoticeIcon>
	</div>
);

export default NotificationMenu;
