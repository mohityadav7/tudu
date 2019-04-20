import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Card } from 'antd'
import StudyMaterial from './StudyMaterial'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'

const StudyMaterialList = (props) => {

    const style={
        padding: '20px',
        border: '1px solid #e8e8e8',
        backgroundColor: '#ffffff',
    }

    const { isTeacher, material } = props;

    return (
        <div style={style}>
            { isTeacher ?
                <Link to='/dashboard/newStudyMaterial'>
                <Button><Icon type="plus" />Add Study Material</Button>
            </Link>
            : null }
            { material ? material.map(item => {
                return (
                    <a href={ item.downloadURL } key={item.id}>
                        <StudyMaterial item={item} />
                    </a>
                )
            }):
                <div>
                    <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }} loading={true}></Card>
                    <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }} loading={true}></Card>
                </div>
             }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        material: state.firestore.ordered.cloudComputing
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'cloudComputing'}])
)(StudyMaterialList);