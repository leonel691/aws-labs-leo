// src/components/Input.tsx
import React, { useState } from 'react';
import zxcvbn from 'zxcvbn'; // N'oubliez pas d'installer 'zxcvbn' (npm install zxcvbn ou yarn add zxcvbn).
import LignePassword from './ligne1'; // Assurez-vous que le chemin vers LignePassword.tsx est correct.

// Définition de l'interface pour les props du composant Input.
interface Pros {
    type: string; // Type de l'input (ex: "email", "password", "text").
    label: string; // Texte du label associé à l'input.
    placeHolder: string; // Texte du placeholder de l'input.
    // 'onPasswordChange' est une prop optionnelle. Elle est appelée si le type est 'password'
    // et que le parent a besoin de la valeur du mot de passe.
    onPasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // 'onChange' est une prop optionnelle générique, utilisée pour les inputs non-password
    // si le parent gère leur valeur.
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, label, placeHolder, onPasswordChange, onChange }: Pros) {
    // État local pour gérer la visibilité du mot de passe (true = visible, false = masqué).
    const [showPassword, setShowPassword] = useState(false);
    // État local pour stocker la valeur actuelle du mot de passe.
    // Il est utilisé uniquement lorsque le 'type' de l'input est 'password'.
    const [currentPassword, setCurrentPassword] = useState('');
    // État local pour stocker le score de force du mot de passe (0-4) calculé par zxcvbn.
    const [passwordStrengthScore, setPasswordStrengthScore] = useState(0);

    // Fonction pour basculer la visibilité du mot de passe.
    const handleTogglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    // Ce gestionnaire d'événements est attaché à l'input et est appelé à chaque changement de valeur.
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value; // Récupère la nouvelle valeur de l'input.

        // Si le type de l'input est 'password', on gère la force et la visibilité.
        if (type === 'password') {
            setCurrentPassword(value); // Met à jour l'état local du mot de passe.
            const result = zxcvbn(value); // Calcule la force du mot de passe avec zxcvbn.
            setPasswordStrengthScore(result.score); // Met à jour le score de force.

            // Si une fonction 'onPasswordChange' a été passée par le parent, on l'appelle.
            if (onPasswordChange) {
                onPasswordChange(event);
            }
        } else {
            // Si ce n'est pas un input de type 'password', on appelle la prop 'onChange' générique si elle existe.
            if (onChange) {
                onChange(event);
            }
        }
    };

    return (
        // Le formulaire englobant l'input. L'ID est basé sur le type de l'input.
        <form id={type} className="mt-[1.5rem]" action="" method="post">
            <label className="font-[700] text-[1rem] font-inter">
                {label} {/* Affiche le label de l'input */}
                <div className="border-[var(--border-color)] mt-[0.5rem] rounded-[0.3rem] border-[0.1rem] flex items-center">
                    <input
                        className="font-inter text-[1.2rem] w-full bg-[var(--bg-input)] font-[400] text-[var(--first-text-color)] outline-none rounded-[0.3rem] px-3 py-2"
                        placeholder={placeHolder}
                        // Le type de l'input change entre 'text' et 'password' pour afficher/masquer.
                        type={type === 'password' && showPassword ? 'text' : type}
                        name={type} // Attribut 'name' pour le formulaire.
                        id={type} // Attribut 'id' pour l'accessibilité.
                        onChange={handleInputChange} // Attache notre gestionnaire de changement.
                        // La valeur de l'input est contrôlée par l'état local 'currentPassword'
                        // si c'est un input de type 'password'. Sinon, elle est non contrôlée
                        // ou gérée par une prop 'value' si vous l'ajoutez pour d'autres types.
                        value={type === 'password' ? currentPassword : undefined}
                    />

                    {/* Le bouton pour basculer la visibilité n'est affiché que pour les inputs de type 'password'. */}
                    {type === 'password' && (
                        <button
                            type="button" // Très important : empêche le bouton de soumettre le formulaire.
                            onClick={handleTogglePasswordVisibility}
                            className="px-3 py-2 text-[var(--first-text-color)] cursor-pointer focus:outline-none"
                            aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                        >
                            {/* Les icônes SVG pour l'œil ouvert/fermé. */}
                            {showPassword ?
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00539C"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00539C"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                            }
                        </button>
                    )}
                </div>
            </label>
            {/* Le composant LignePassword est rendu uniquement si le type de l'input est 'password'. */}
            {/* Il reçoit le score de force calculé localement. */}
            {type === 'password' && (
                <LignePassword strengthScore={passwordStrengthScore} />
            )}
        </form>
    );
}
