// src/components/LignePassword.tsx

// Définition de l'interface pour les props du composant LignePassword.
// Il attend un 'strengthScore' qui est un nombre.
interface LignePasswordPros {
    strengthScore: number; // Le score de force du mot de passe (généralement de 0 à 4 avec zxcvbn).
}

export default function LignePassword({ strengthScore }: LignePasswordPros) {
    // Cette fonction détermine la classe CSS de couleur pour chaque barre de progression.
    // Elle utilise les classes Tailwind CSS pour les couleurs.
    const getBarColor = (index: number) => {
        // 'bg-[var(--bg-validation)]' est la couleur par défaut (inactive) de la barre.
        // Les classes comme 'bg-red-500', 'bg-orange-500', etc., sont des couleurs Tailwind CSS.

        // Si le score est 0, toutes les barres restent de la couleur par défaut.
        if (strengthScore === 0) return 'bg-[var(--bg-validation)]';
        // Si le score est 1 (Très Faible), la première barre est rouge.
        if (strengthScore === 1) return index < 1 ? 'bg-red-500' : 'bg-[var(--bg-validation)]';
        // Si le score est 2 (Faible), les deux premières barres sont orange.
        if (strengthScore === 2) return index < 2 ? 'bg-orange-500' : 'bg-[var(--bg-validation)]';
        // Si le score est 3 (Moyen), les trois premières barres sont jaunes.
        if (strengthScore === 3) return index < 3 ? 'bg-yellow-500' : 'bg-[var(--bg-validation)]';
        // Si le score est 4 ou plus (Fort/Très Fort), toutes les barres sont vertes.
        if (strengthScore >= 4) return index < strengthScore ? 'bg-green-500' : 'bg-[var(--bg-validation)]';

        // Fallback au cas où le score serait inattendu.
        return 'bg-[var(--bg-validation)]';
    };

    return (
        <div id="streng" className="grid grid-cols-4 gap-2 mt-3">
            {/* Nous utilisons un tableau pour itérer et créer les 4 barres de progression. */}
            {/* 'key={index}' est important pour la performance et la stabilité des listes en React. */}
            {[0, 1, 2, 3].map((index) => (
                <div
                    key={index}
                    // La classe CSS est construite dynamiquement en combinant les classes fixes
                    // et la couleur déterminée par 'getBarColor'.
                    className={`rounded-xl h-2 w-full ${getBarColor(index)}`}
                ></div>
            ))}
        </div>
    );
}
