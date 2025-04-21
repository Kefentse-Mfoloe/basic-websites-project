import TabButton from './TabButton';
import { TAB_BUTTONS } from '../../data';

function TabButtons ( { selectedTopic, handleClick }) {
    return (
      <menu>
        {TAB_BUTTONS.map((tabButtonItem) => (
          <TabButton
            key={tabButtonItem}
            isSelected={selectedTopic === tabButtonItem}
            onSelect={() => handleClick(tabButtonItem)}
          >
            {tabButtonItem}
          </TabButton>
        ))}
      </menu>
    );
};

export default TabButtons;