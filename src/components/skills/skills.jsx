import React, { useEffect, useRef } from 'react'
import ForceGraph from 'force-graph'

export const SkillsComponent = () => {
 const containerRef = useRef(null)

 useEffect(() => {
  if (!containerRef.current) return

  const Graph = ForceGraph()(containerRef.current)

  fetch('skills.json')
   .then(res => res.json())
   .then(data => {
    Graph
     .graphData(data)
     .nodeId('id')
     .nodeAutoColorBy('group')
     .linkColor(() => 'rgba(255,255,255,0.4)')
     .linkWidth(1.2)
     .enableZoomInteraction(false) // 👈 evita que el scroll haga zoom
     .nodeCanvasObject((node, ctx, globalScale) => {
      const label = node.id
      const fontSize = 12 / globalScale
      ctx.font = `${fontSize}px Sans-Serif`
      const textWidth = ctx.measureText(label).width
      const bckgDimensions = [textWidth, fontSize].map(
       n => n + fontSize * 0.2
      )

      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(
       node.x - bckgDimensions[0] / 2,
       node.y - bckgDimensions[1] / 2,
       ...bckgDimensions
      )

      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = node.color
      ctx.fillText(label, node.x, node.y)

      node.__bckgDimensions = bckgDimensions
     })
   })
 }, [])

 return (
  <div
   ref={containerRef}
   style={{ width: '100%', height: '500px' }} // 👈 ya no bloquea scroll
  />
 )
}
