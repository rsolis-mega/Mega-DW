/* import React, { Component } from 'react'
import Iframe from 'react-iframe'
import tableauSoftware from 'tableau-api'

const url = 'http://192.168.25.17/views/Datosgenerales/Dashboard2?:origin=card_share_link&:embed=n'
const frame = <Iframe url="http://192.168.25.17/trusted//views/workbookQ4/SalesQ4?:embed=yes"></Iframe>


class BasicEmbed extends Component {

    componentDidMount() {
        this.initViz()
    }
    

    initViz = () => {
        const options = {
            hideTabs: false,
            width: '1280px',
            height: '720px',
        }
        const vizContainer = this.vizContainer
        this.div = new window.tableauSoftware.Viz(vizContainer, url, options)
    }

    render() {
        return (
            <div ref = {div => this.vizContainer = div}>
                
            </div>
        )
    }
} */

import React, { Component } from 'react'
import { ReactDOM } from 'react-dom'

export default class BasicEmbed extends Component {
    render() {
        return (
            <div>
                <iframe src="http://192.168.25.17/trusted/lZsdjrzYTvWzuBSlPkXCZw==:7Nbq1K0gW_j1yjaoH--A8qF1/views/Datosgenerales/Dashboard2?:origin=card_share_link&:embed=yes" width="1200" height="1000"></iframe>
            </div>
        )
    }
}

// export default BasicEmbed
