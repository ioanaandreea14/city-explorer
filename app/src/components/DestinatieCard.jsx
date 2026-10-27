export default function DestinatieCard({ destinatie, onToggle  }) {
    const { oras, tara, zile, vizitat } = destinatie;

    return (
        <article className={vizitat ? 'card vizitat' : 'card'}>
            <h3>{oras}</h3>
            <p className="tara">{tara}</p>
            <p className="zile">{zile} zile</p>
            {onToggle && (
                <button type="button" onClick={() => onToggle(destinatie.id)}>
                    {vizitat ? 'Vizitat' : 'Marchează vizitat'}
                </button>
            )}
            {/*/!* Cerință suplimentară: buton de ștergere *!/*/}
            {/*{onDelete && (*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        onClick={() => onDelete(destinatie.id)}*/}
            {/*        style={{ marginTop: '0.4rem', background: '#ef4444' }}*/}
            {/*    >*/}
            {/*        Șterge*/}
            {/*    </button>*/}
            {/*)}*/}
        </article>
    );
}