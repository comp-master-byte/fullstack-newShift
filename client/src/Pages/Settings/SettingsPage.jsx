import React from 'react';
import { ResultOfAction } from "../../components/resultOfAction/ResultOfAction.jsx"

export const SettingsPage = () => {
    return (
        <div>
            <ResultOfAction
                resultText="Настройки профиля находятся на этапе разработки."
                to="/"
                goWhere="главную"
            />
        </div>
    )
}
