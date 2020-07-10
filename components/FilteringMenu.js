import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LIST_VIEW_ICONS = ['list', 'border-all'];
const DATE_FILTERING_ICONS = ['sort-numeric-down', 'sort-numeric-up'];

const FilteringMenu = ({onChange, filter}) => {

    return (
        <div className="filtering-menu mb-2">

            <FontAwesomeIcon 
                className="clickable hoverable mr-3"
                icon={LIST_VIEW_ICONS[filter.view.list]}
                size="2x"
                onClick={() => {
                    onChange('view', { list: +!filter.view.list });
                }} 
            />

            <FontAwesomeIcon 
                className="clickable hoverable"
                icon={DATE_FILTERING_ICONS[filter.date.asc]}
                size="2x"
                onClick={() => {
                    onChange('date', { asc: +!filter.date.asc });
                }} 
            />

        </div>
    )
}

export default FilteringMenu;