import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

const Gallery = () => {
    const {id}=useParams();
    const [state,setState]=useState(["http://www.freeimageslive.com/galleries/home/playroom/pics/objects00016g.jpg",
    "http://www.bootleg-objects.com/download/re_sl_totale.jpg",
    "http://blogs.ukoln.ac.uk/cultural-heritage/files/2010/03/NIM_1983-99_23.jpg",
    "http://www.wallsave.com/wallpapers/1920x1080/newera/262606/newera-black-cap-new-york-city-monochrome-objects-ny-262606.jpg",
    "http://www.freeimageslive.com/galleries/objects/watch/pics/objects00242.jpg",
    "http://www.imageafter.com/dbase/images/objects_household/b13objects_household036.jpg",
    "http://www.freeimageslive.com/galleries/wallpaper/work/objects00018g_dt1024.jpg",
    "http://www.hdwallpaperstop.com/wp-content/uploads/2013/06/3D-Object-Dice-HD-Wallpaper.jpg",
    "http://www.imageafter.com/dbase/images/objects/b10objects019.jpg",
    "http://www.imageafter.com/dbase/images/objects_circuits/b16objects_circuits006.jpg",
    "http://www.sharperliving.co.uk/wp-content/uploads/2013/05/Aston-Martin-V12-Vantage-S-Objects-of-Desire-Marron-Black.jpg",
    "http://blog.gessato.com/wp-content/uploads/2011/11/manoteca-repurposed-objects-design-gessato-gblog-4.jpg",
    "http://www.imageafter.com/dbase/images/objects/b12objects024.jpg",])
  return (
    <div>
   <img src={state[id]} width={"500px"} height={"500px"}/>

    </div>
  )
}

export default Gallery