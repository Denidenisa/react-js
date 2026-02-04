export const Exo7Compteur=({nom})=>{

}













































































































// import { useEffect, useState } from "react"

// export const Compteur = ({ nom }) => {
//   // État pour stocker la valeur du compteur
//   const [compte, setCompte] = useState(0)

//   // 🔵 PREMIER useEffect : Charger la valeur sauvegardée au montage du composant
//   // Tableau de dépendances VIDE [] = s'exécute UNE SEULE FOIS quand le composant apparaît
//   useEffect(() => {
//     console.log(`🐣 Le compteur "${nom}" apparaît à l'écran`)
    
//     // Récupérer la valeur sauvegardée dans le localStorage
//     const valeurSauvegardee = localStorage.getItem(`compteur_${nom}`)
    
//     if (valeurSauvegardee !== null) {
//       // Convertir la chaîne en nombre et restaurer la valeur
//       setCompte(Number(valeurSauvegardee))
//       console.log(`📥 Valeur restaurée pour "${nom}": ${valeurSauvegardee}`)
//     }

//     // Fonction de nettoyage (cleanup) : s'exécute quand le composant disparaît
//     return () => {
//       console.log(`💀 Le compteur "${nom}" disparaît de l'écran`)
//     }
//   }, [nom]) // Dépendance sur "nom" au cas où il changerait

//   // 🟢 DEUXIÈME useEffect : Sauvegarder à chaque modification du compteur
//   // Tableau de dépendances [compte] = s'exécute à chaque fois que "compte" change
//   useEffect(() => {
//     // Sauvegarder dans le localStorage
//     localStorage.setItem(`compteur_${nom}`, compte)
//     console.log(`💾 Sauvegarde du compteur "${nom}": ${compte}`)
//   }, [compte, nom]) // Dépendances : se déclenche quand "compte" OU "nom" change

//   // Icône selon le type de compteur
//   const icone = nom.includes('Bug') ? '🐛' : '✨'

//   return (
//     <div style={{ margin: '1rem 0' }}>
//       <h3>{icone} {nom}</h3>
//       <div style={{ 
//         display: 'flex', 
//         alignItems: 'center', 
//         gap: '1rem',
//         marginTop: '1rem'
//       }}>
//         <button 
//           onClick={() => setCompte(compte - 1)}
//           style={{
//             padding: '0.5rem 1rem',
//             fontSize: '1.2rem',
//             cursor: 'pointer',
//             backgroundColor: '#f03e3e',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px'
//           }}
//         >
//           ➖ -1
//         </button>
        
//         <span style={{ 
//           fontSize: '2.5rem', 
//           fontWeight: 'bold',
//           minWidth: '80px',
//           textAlign: 'center'
//         }}>
//           {compte}
//         </span>
        
//         <button 
//           onClick={() => setCompte(compte + 1)}
//           style={{
//             padding: '0.5rem 1rem',
//             fontSize: '1.2rem',
//             cursor: 'pointer',
//             backgroundColor: '#2f9e44',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px'
//           }}
//         >
//           ➕ +1
//         </button>
//       </div>
//     </div>
//   )
// }