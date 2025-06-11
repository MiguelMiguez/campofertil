import React from 'react'
import Banner from '../../sections/SectionsInsumos/Banner/Banner'
import Pasarela from '../../components/Pasarela/Pasarela'
import Herbicidas from '../../sections/SectionsInsumos/Herbicidas/Herbicidas'
import './Insumos.css'

const Insumos = () => {
    return (
        <main >
            <Banner />
            <Pasarela />
            <Herbicidas />
        </main>
    )
}

export default Insumos