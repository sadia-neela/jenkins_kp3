// Utils/allureUtils.js
import AllureReporter from "@wdio/allure-reporter";

class AllureUtils {
    
    // Basic label (appears in test details)
    setLabel(labelName, labelValue) {
        AllureReporter.addLabel(labelName, labelValue);
    }
    
    // Specific label types that appear in UI
    setFeature(featureName) {
        AllureReporter.addFeature(featureName);
    }
    
    setStory(storyName) {
        AllureReporter.addStory(storyName);
    }
    
    setEpic(epicName) {
        AllureReporter.addEpic(epicName);
    }
    
    setSeverity(severity) {
        // severity: 'blocker', 'critical', 'normal', 'minor', 'trivial'
        AllureReporter.addSeverity(severity);
    }
    
    setTag(tagName) {
        AllureReporter.addTag(tagName);
    }
    
    setOwner(ownerName) {
        AllureReporter.addOwner(ownerName);
    }
    
    setSuite(suiteName) {
        AllureReporter.addLabel('suite', suiteName);
    }
    
    setSubSuite(subSuiteName) {
        AllureReporter.addLabel('subSuite', subSuiteName);
    }
    
    setParentSuite(parentSuiteName) {
        AllureReporter.addLabel('parentSuite', parentSuiteName);
    }
    
    // Multiple labels at once
    setMultipleLabels(labels) {
        Object.entries(labels).forEach(([key, value]) => {
            this.setLabel(key, value);
        });
    }
    
    // Set test type (smoke, regression, etc.)
    setTestType(type) {
        this.setTag(type);
        this.setLabel('testType', type);
    }
    
    // Set layer (e2e, api, unit)
    setLayer(layer) {
        this.setLabel('layer', layer);
    }
    
    // Set package
    setPackage(packageName) {
        this.setLabel('package', packageName);
    }

    attachScreenshot(name, content) {
        AllureReporter.addAttachment(name, content, 'image/png');
    }

    addTextAttachment(name, content) {
        AllureReporter.addAttachment(name, content, 'text/plain');
    }
}

export default AllureUtils;